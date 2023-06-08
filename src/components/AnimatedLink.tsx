import styled from "styled-components";

interface Props {
  title: string;
  url: string;
  label: string;
}

const Link = styled.a`
  display: inline-block;
  position: relative;
  color: inherit;
  width: max-content;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: whitesmoke;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function AnimatedLink(props: Props) {
  return (
    <Link href={props.url} title={props.title} target="_blank">
      {props.label}
    </Link>
  );
}
