import type { NextPage } from "next";
import Head from "next/head";
import PageHeader from "@/components/page-header";
import BookItem from "@/components/book-item";
import BookItemLoading from "@/components/book-item/book-item-loading";
import InfiniteScroll from "react-infinite-scroller";
import useHome from "../hooks/home";
import styles from "@/styles/home.module.css";

const Home: NextPage = () => {
  const { listBooks, loadMore, hasMore } = useHome();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageHeader title="Home Page" />
        <div className={styles["home-container"]}>
          <InfiniteScroll
            pageStart={1}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={
              <BookItemLoading />
            }
          >
            {listBooks.map((book) => (
              <BookItem book={book} />
            ))}
          </InfiniteScroll>
        </div>
      </main>
    </div>
  );
};

export default Home;