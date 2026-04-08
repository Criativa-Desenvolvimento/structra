import { prisma } from '@/lib/prisma'

export async function getPages() {
  return await prisma.page.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export async function createPage(data: {
  title: string
  content: string
}) {
  return await prisma.page.create({
    data,
  })
}

export async function getPageById(id: string) {
  return await prisma.page.findUnique({
    where: { id },
  })
}

export async function updatePage(
  id: string,
  data: { title: string; content: string }
) {
  return await prisma.page.update({
    where: { id },
    data,
  })
}