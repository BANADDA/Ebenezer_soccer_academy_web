import PropTypes from "prop-types";
import { Card, Avatar, Typography, CardHeader, CardBody, CardFooter } from "@material-tailwind/react";

export function TeamCard({ img, name, position, text, socials }) {
  return (
    <Card  variant="gradient"  color="transparent" shadow={true} className="relative flex flex-col w-full max-w-[18rem] shadow-lg mb-5 mx-0 transition duration-300 ease-in-out hover:scale-105">
      <CardHeader floated={false} className="relative h-56">
      <Avatar
        src={img}
        alt={name}
        className="shadow-lg shadow-gray-800/25 h-full m-0 p-0 w-full flex"
      />
      </CardHeader>
      <CardBody className="mb-0 text-center">
      <Typography variant="h5" color="blue-gray" className="mb-0">
        {name}
      </Typography>
      {position && (
        <Typography className="font-medium text-blue-gray-600">
          {position}
        </Typography>
      )}
      {/* {text && (
        <Typography className="text-blue-gray-500 inline-block text-left font-light text-sm">{text}</Typography>
      )} */}
      </CardBody>
      <CardFooter divider className="flex justify-center gap-7 pt-0 mb-0 py-3">
      {socials && <div className="mx-auto text-red-500">{socials}</div>}
      </CardFooter>
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  text: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
