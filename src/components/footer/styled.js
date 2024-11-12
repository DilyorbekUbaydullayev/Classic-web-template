import { Box, Button, styled, Typography } from "@mui/material";
import img from "../../assets/classic-pattern-bg.png";
export const BgImg = styled(Box)`
  background-image: url(${img});
  background-size: auto;
  background-position: center;
  height: 40.5rem;
  padding-top: 2.5rem;
  @media (max-width: 1170px) {
    height: auto;
  }
`
export const FooterBox = styled(Box)({
    backgroundColor: "#cccccc",
    padding: "20px 1px 20px 1px",
    fontSize: "16px",
    lineHeight: 2,
    fontWeight: 300,
    paddingInline: '1.25rem',
    marginBottom: 10,
});
export const FooterTitle = styled(Typography)({
    fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
    fontSize: 16,
    lineHeight: 2,
    color: "#fff",
    paddingBottom: '1rem',
    marginBottom: '1rem',
    borderBottom: "1px solid #fff",
});
export const FooterTitle2 = styled(Typography)({
    fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
    fontSize: '1rem',
    lineHeight: 2,
    color: "#fff",
    paddingTop: 12,
    marginBottom: -10,
})
export const FooterButton = styled(Button)({
    marginBlock: 30,
    borderRadius: 6,
    padding: "0.5rem 1.5rem",
    color: "#fff",
    display: "block",
    fontFamily: "Open Sans,Helvetica,sans-serif",
    fontSize: "1.125rem",
    fontWeight: "300",
    backgroundColor: "#666666",
    "&:hover": { backgroundColor: "#515050", color: "white" },
});
export const FooterBox2 = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    gap: '0.3rem',
});
export const FooterImg = styled('img')({
    maxWidth: "100%",
    height: "auto",
})
