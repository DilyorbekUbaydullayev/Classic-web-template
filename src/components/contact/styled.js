import { Box, styled, Typography } from "@mui/material";
import { CardButon } from "../cards/styled";

export const ContactInput = styled('textarea')({
    fontSize: '18px',
    padding: '1rem',
    outlineStyle: "none",
    border: "1px solid #8c8c8c",
});

export const ContactButton = styled(CardButon)({
marginBlock: '1.5rem',
});
export const ContactImg = styled('img')({
    maxWidth: "100%",
    height: "auto",
    marginTop: 40,
});
export const ContactTitle = styled(Typography)({
    color: "#cc9900",
     fontSize: 24,
     marginTop: 0,
     marginBottom: 2,
});
export const ContactTitle2 = styled(Typography)({
    width: "100%",
    fontFamily:"'Open Sans', Helvetica, Arial, sans-serif",
    fontSize: 16.5,
    lineHeight: 2,
    color: "#8C8C8C",
    paddingBottom: 25,
    borderBottom: "1px solid #8C8C8C",
});
export const ContactBox = styled(Box)({
    borderBottom: "1px solid #8c8c8c",
     paddingBottom:30
})