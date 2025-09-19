import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h1>Student Info</h1>
      <p>Name: Anna Isabelle Yabut</p>
      <p>
        GitHub:{" "}
        <Link 
          href="https://github.com/isayabs/cprg306-assignments" 
          target="_blank"
        >
          https://github.com/isayabs/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}