import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Anna Isabelle Yabut</p>
      <p>
        GitHub:{" "}
        <Link 
          href="https://github.com/isayabs/cprg306-assignments" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          isayabs/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}