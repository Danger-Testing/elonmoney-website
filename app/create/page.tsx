import Link from "next/link";

export default function CreatePage() {
  return (
    <main className="create-page">
      <Link className="create-page__back" href="/">
        Elon Money
      </Link>

      <button className="create-page__button" type="button">
        Create
      </button>
    </main>
  );
}
