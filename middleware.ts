import { default as middleware } from "next-auth/middleware";

export default middleware;

export const config = {
    matcher: [
        '/Issues/new',
        '/Issues/:id+/edit'
    ]
};