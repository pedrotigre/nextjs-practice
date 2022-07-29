import { useRouter } from 'next/router';

function Slug() {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div>
      <h1>Slug: {slug}</h1>
    </div>
  );
}

export default Slug;
