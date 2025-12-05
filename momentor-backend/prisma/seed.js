import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "admin@gmail.com" },
  });

  if (existingAdmin) {
    console.log("✅ Admin user already exists. Skipping creation.");
    return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash("admin123", 10);

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@gmail.com",
      password: hashedPassword,
      isActive: true,
    },
  });

  console.log("✅ Admin user created successfully!");
  console.log("📧 Email: admin@gmail.com");
  console.log("🔑 Password: admin123");
  console.log("🆔 User ID:", adminUser.id);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

