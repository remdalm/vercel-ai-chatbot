import { getChatsByUserId } from "@/lib/db/queries";

export async function GET() {
  // biome-ignore lint: Forbidden non-null assertion.
  // const chats = await getChatsByUserId({ id: session.user.id! });
  // return Response.json(chats);
}
