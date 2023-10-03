import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { Client } from "pg";
const db = new Client({
  connectionString: process.env.PG_CONNECTION,
});
db.connect();

export async function GET() {
  try {
    const result = await db.query(
      "SELECT * FROM leaderboard ORDER BY points DESC LIMIT 11"
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    return NextResponse.json({ error: "Error DB GET" });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();

  if (!session) {
    return NextResponse.json({
      error: "Inicia sesión para subir tu puntuación",
    });
  }

  if (body.points <= 0) {
    return NextResponse.json({
      error: "Los puntos deben ser mayor que 0",
    });
  }

  try {
    const result = await db.query(
      `
  INSERT INTO leaderboard (username, points)
  VALUES ($1, $2)
  ON CONFLICT (username)
  DO UPDATE SET points = (
    SELECT COALESCE((SELECT points FROM leaderboard WHERE username = $1), 0) + $2
  )
  `,
      [session.user.name, body.points]
    );
    return NextResponse.json({ message: "¡Puntuación actualizada!" });
  } catch (err) {
    return NextResponse.json({
      message: "Ocurrió un error inesperado, volvé a intentarlo.",
      error: err,
    });
  }
}
