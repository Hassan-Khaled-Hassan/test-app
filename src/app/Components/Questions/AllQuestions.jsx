"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AllQuestions() {
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(
      isExpanded
        ? [...expanded, panel]
        : expanded.filter((item) => item !== panel)
    );
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "#050430",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "center", md: "center" },
          fontWeight: "bold",
          fontSize: "32px",
        }}
      >
        FAQ
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
          sx={{
            borderRadius: "24px",
            borderTopLeftRadius: "24px !important",
            borderTopRightRadius: "24px !important",
            mb: 2,
            bgcolor: "white",
            // border : "3px solid #4C6444"
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ fontWeight: "bold", color: "#4C6444" }} />
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ fontWeight: "bold", color: "black" , border : "4px solid #4C6444" ,  borderRadius: "24px", }}
          >
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
            >
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "white",
              borderRadius: "24px",
              borderTopLeftRadius: "24px !important",
              borderTopRightRadius: "24px !important",
            }}
          >
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: {
                  sm: "100%",
                  md: "70%",
                  color: "#050430",
                  padding: "20px 16px 16px !important",
                },
              }}
            >
              You can reach our customer support team by emailing&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;or calling our toll-free number. We&apos;re here to assist
              you promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
          sx={{
            borderRadius: "24px",
            borderTopLeftRadius: "24px !important",
            borderTopRightRadius: "24px !important",
            mb: 2,
            bgcolor: "white",
            // border : "3px solid #4C6444"
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ fontWeight: "bold", color: "#4C6444" }} />
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ fontWeight: "bold", color: "black" , border : "4px solid #4C6444" ,  borderRadius: "24px", }}
          >
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
            >
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "white",
              borderRadius: "24px",
              borderTopLeftRadius: "24px !important",
              borderTopRightRadius: "24px !important",
            }}
          >
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: {
                  sm: "100%",
                  md: "70%",
                  color: "#050430",
                  padding: "20px 16px 16px !important",
                },
              }}
            >
              You can reach our customer support team by emailing&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;or calling our toll-free number. We&apos;re here to assist
              you promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
          sx={{
            borderRadius: "24px",
            borderTopLeftRadius: "24px !important",
            borderTopRightRadius: "24px !important",
            mb: 2,
            bgcolor: "white",
            // border : "3px solid #4C6444"
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ fontWeight: "bold", color: "#4C6444" }} />
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ fontWeight: "bold", color: "black" , border : "4px solid #4C6444" ,  borderRadius: "24px", }}
          >
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
            >
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "white",
              borderRadius: "24px",
              borderTopLeftRadius: "24px !important",
              borderTopRightRadius: "24px !important",
            }}
          >
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: {
                  sm: "100%",
                  md: "70%",
                  color: "#050430",
                  padding: "20px 16px 16px !important",
                },
              }}
            >
              You can reach our customer support team by emailing&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;or calling our toll-free number. We&apos;re here to assist
              you promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel4")}
          onChange={handleChange("panel4")}
          sx={{
            borderRadius: "24px",
            borderBottomLeftRadius: "24px !important",
            borderBottomRightRadius: "24px !important",
            mb: 2,
            bgcolor: "white",
            // border : "3px solid #4C6444"
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ fontWeight: "bold", color: "#4C6444" }} />
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ fontWeight: "bold", color: "black" , border : "4px solid #4C6444" ,  borderRadius: "24px", }}
          >
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
            >
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "white",
              borderRadius: "24px",
              borderBottomLeftRadius: "24px !important",
              borderBottomRightRadius: "24px !important",
            }}
          >
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: {
                  sm: "100%",
                  md: "70%",
                  color: "#050430",
                  padding: "20px 16px 16px !important",
                },
              }}
            >
              You can reach our customer support team by emailing&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;or calling our toll-free number. We&apos;re here to assist
              you promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
