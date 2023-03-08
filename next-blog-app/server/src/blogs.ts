export interface Blogs {
    title: string;
    author: string;
    date: string;
    content: string;
    id: string;
       
}
const blogs: Blogs[] = [
    {
        title: "This title",
        author: "Author",
        date: "2023-01-01",
        content: "Content 1",
        id: "1",
    },
    {
        title: "That Title",
        author: "Author",
        date: "2023-01-01",
        content: "Content 1",
        id: "2",
    },
    {
        title: "The other Title",
        author: "Author",
        date: "2023-01-01",
        content: "Content 1",
        id: "3",
    },
    {
        title: "Whatever Title",
        author: "Author",
        date: "2023-01-01",
        content: "Content 1",
        id: "4",
    }
]
export default blogs;