import ActionButton from "./components/ActionButton";

export default function Home() {
  return (
    <main className="landing" data-node-id="43:15">
      <h1 className="landing__title" data-node-id="43:16">
        Elon Money
      </h1>

      <ActionButton className="landing__create" href="/create" size="compact">
        Create your own
      </ActionButton>

      <ActionButton className="landing__button">
        <span data-node-id="43:20">Net worth</span>
      </ActionButton>
    </main>
  );
}
