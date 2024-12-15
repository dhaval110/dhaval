import {
  faGithub,
  // faLinkedin,
  // faInstagram,
  // faXTwitter,
  faStackOverflow,
  faSquareUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";
// import { BsStackOverflow } from "react-icons/bs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  // {
  //   name: Strings.linkedIn,
  //   url: Strings.linkedInLink,
  //   icon: faLinkedin,
  //   text: Strings.linkedInUsername,
  // },
  {
    name: Strings.upwork,
    url: Strings.upworkLink,
    icon: faSquareUpwork,
    text: Strings.upworkUsername,
  },
  // {
  //   name: Strings.instagram,
  //   url: Strings.instagramLink,
  //   icon: faInstagram,
  //   text: Strings.instagramUsername,
  // },
  {
    name: Strings.Stackoverflow,
    url: Strings.StackoverflowLink,
    icon: faStackOverflow,
    text: Strings.StackoverflowUsername,
  },
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: Strings.primaryEmail,
  },
];

export default socialLinks;
