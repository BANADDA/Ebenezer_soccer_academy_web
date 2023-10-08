import PropTypes from "prop-types";
import { Card, Avatar, Typography, CardHeader, Button, CardBody, CardFooter} from "@material-tailwind/react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Player from "./player";

const style = {
  position: 'absolute',
  outline:0,
  text: 'white',
  top: '50%',
  left: '50%',
  bgColor:'white',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  width: 'auto',
  p: 0,
};

export function PlayerCard({ img, name, socials, DOB, PLACE_OF_BIRTH, CITIZENSHIP, HEIGHT, FOOT, POSITION}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      variant="gradient"
      color="transparent"
      shadow={true}
      className="group relative mx-0 mb-5 flex w-full max-w-[18rem] flex-col shadow-lg"
    >
      <CardHeader floated={false} className="relative h-64">
        <Avatar
          src={img}
          alt={name}
          className="m-0 flex h-full w-full p-0 shadow-lg shadow-gray-800/25"
        />
      </CardHeader>
      <CardBody className="mb-0 py-3 text-center">
        <Typography variant="h5" color="blue-gray" className="mb-0">
          {name}
        </Typography>
        {/* {text && (
        <Typography className="text-blue-gray-500 inline-block text-left font-light text-sm">{text}</Typography>
      )} */}
      </CardBody>
      <CardFooter className="flex justify-center gap-7 py-0 pt-0 mb-5">
      <Button
          className="inline-block rounded bg-red-800 px-3 pt-2.5 pb-2 text-xm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-900 hover:shadow-red-800/20"
          data-te-ripple-init
          data-te-ripple-color="red"
          onClick={handleOpen}
        >
          View Profile
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus
        >
          <Box sx={style}>
            <Player
            src={img}
            alt={name}
            name={name}
            DOB={DOB}
            PLACE_OF_BIRTH={PLACE_OF_BIRTH}
            CITIZENSHIP={CITIZENSHIP}
            HEIGHT={HEIGHT}
            FOOT={FOOT}
            POSITION={POSITION}
            social={socials && <div className="mx-auto text-red-500">{socials}</div>}
            />
          </Box>
        </Modal>
      </CardFooter>
      
    </Card>
  );
}

PlayerCard.defaultProps = {
  position: "",
  socials: null,
};

PlayerCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  text: PropTypes.string,
  socials: PropTypes.node,
};

PlayerCard.displayName = "/src/widgets/layout/team-card.jsx";

export default PlayerCard;
