import Link from "next/link";
import ActionButton from "../components/ActionButton";

export default function CreatePage() {
  return (
    <main className="create-page">
      <Link className="create-page__back" href="/">
        Elon Money
      </Link>

      <ActionButton className="create-page__button">
        Create
      </ActionButton>
    </main>
  );
}
