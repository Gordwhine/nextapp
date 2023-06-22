import { NextResponse } from "next/server"
import connectDB from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    const url = new URL(request.url)
    const username = url.searchParams.get("username")

    // return new NextResponse("It works", { status: 200});
    try {
        await connectDB();

        const posts = await Post.find(username && {username});
        return new NextResponse(JSON.stringify(posts), { status: 200 });
        // console.log(posts)
        // return new NextResponse(posts, { status: 200});
    } catch (err) {
        console.log(err)
        return new NextResponse("Database Error", { status: 500 });
    }
}


export const POST = async (request) => {
    const body = await request.json()
    const newPost = new Post(body)
    
    try {
        await connectDB();

        await newPost.save()
        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        console.log(err)
        return new NextResponse("Database Error", { status: 500 });
    }
}