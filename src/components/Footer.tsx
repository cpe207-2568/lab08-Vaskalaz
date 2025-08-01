import { type FooterProps } from "../libs/types"

export function Footer(props: FooterProps) {
  return (
    <header className="text-secondary text-center p-2 bg-light mt-auto">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </header>
  );
}