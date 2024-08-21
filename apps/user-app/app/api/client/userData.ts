import { getServerSession } from "next-auth";
import { userAuth } from "../../api/auth/user/auth";
import { prisma } from "@repo/database/client";

export async function getName() {
    const session = await getServerSession(userAuth);
    if (!session || !session.user) {
        return null;
    }
    const user = await prisma.user.findFirst({
        where: {
            id: session.user.id,
        },
        select: {
            name: true,
        },
    });
    return user?.name || null;
}

export async function geteuserDATA() {
    const data = await prisma.user.findMany();
    return data.map((value) => ({
        name: value.name || "",
        number: value.number,
    }));
}