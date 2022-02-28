import { PrismaClient } from "@prisma/client";
const {currency,wallet_types,asset_types } = require('./data/database_types');
const prisma = new PrismaClient();

async function main() {
    await prisma.currency.createMany({
        data: currency
    });
    await prisma.walletType.createMany({
        data: wallet_types
    });
    await prisma.assetType.createMany({
        data: asset_types
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });