import { useEffect, useState } from "react";
import BookForm from "../components/book/book.form";
import BookTable from "../components/book/book.table";
import { fetchAllBooks } from "../services/api.service";

const BookPage = () => {

    const [dataBook, setDataBook] = useState([]);
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(3)
    const [total, setTotal] = useState(0)

    const loadBook = async () => {
        const res = await fetchAllBooks(current, pageSize)
        if (res?.data) {
            setDataBook(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }
    }

    useEffect(() => {
        loadBook()
    }, [current, pageSize])

    return (
        <div style={{ padding: "20px" }}>
            <BookForm loadBook={loadBook} />
            <hr></hr>
            <BookTable dataBook={dataBook} loadBook={loadBook} setDataBook={setDataBook} current={current} setCurrent={setCurrent} pageSize={pageSize} setPageSize={setPageSize} total={total} setTotal={setTotal} />
        </div>
    );
}

export default BookPage;