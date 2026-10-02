import { z } from 'zod';

const IssueSchema = z.object({
    title: z.string().min(3).max(255).optional(),
    description: z.string().min(3).optional(),
    assignToUserId:z.string().min(1).max(255).optional().nullable()
})
export default IssueSchema;