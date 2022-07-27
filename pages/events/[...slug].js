import { useRouter } from 'next/router';

function Slug() {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div>
      <h1>Slug:</h1>
      <ul></ul>
    </div>
  );
}

export default Slug;
