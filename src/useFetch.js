import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        // console.log('use effect ran');
        // console.log(blogs);
        fetch(url)
        .then(res => {
         return res.json()
        })
        .then(data => {
          //  console.log(data);
          //  setIsPending(false);
           setData(data);
        });
        return () => abortCont.abort();
      }, [url]);

      return { data };
};

export default useFetch;