import { useRouter } from 'next/router';

// our-domain.com/news/something-important

const NewsDetail = () => {

    const router = useRouter();
    const newsId = router.query.newsId;

    return <h1>The News Page for NewsId {newsId}</h1>
    
}

export default NewsDetail;