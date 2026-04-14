import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function hashExistingPasswords() {
    const users = await prisma.users.findMany();
    
    for (const user of users) {
        // Only hash if they don't look like bcrypt hashes (bcrypt usually starts with $2)
        if (!user.password.startsWith('$2')) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await prisma.users.update({
                where: { user_id: user.user_id },
                data: { password: hashedPassword }
            });
            console.log(`Hashed password for user: ${user.user_name}`);
        }
    }
}
