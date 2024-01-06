import "./accordin.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default () => {
  return (
    <div className="wrapper">
      <div className="header">
        <p>FAQs</p>
      </div>
      <Accordion
        style={{
          border: "1px white",
          borderRadius: "10px",
          borderWidth: "thin",
          marginBottom: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: "var(--css-primary)",
                fontSize: "40px",
                fontWeight: 900,
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "var(--css-black)",
            color: "var(--css-white)",
            border: "1px solid white",
            borderWidth: "thin",
            borderRadius: "10px",
          }}
        >
          <Typography className="accordin-Q">Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: "var(--css-white)",
            color: "var(--css-black)",
            borderRadius: "10px",
          }}
        >
          <Typography className="accordin-A">
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          border: "1px solid white",
          borderRadius: "10px",
          borderWidth: "thin",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: "var(--css-primary)",
                fontSize: "40px",
                fontWeight: 900,
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            backgroundColor: "var(--css-black)",
            color: "var(--css-white)",
            border: "1px  white",
            borderWidth: "thin",
            borderRadius: "10px",
          }}
        >
          <Typography className="accordin-Q">
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordin-A">
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
