import { Button, styled, Typography } from "@mui/material";

export const CardImg = styled('img')({
    maxWidth: '100%',
    height: 'auto',
});
export const CardTitle1 = styled(Typography)({
    color: "#cc9900",
    fontSize: 24,
    marginBlock:'1rem'
});
export const CardTitle2 = styled(Typography)({
    fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
    fontSize: 16.5,
    lineHeight: 2,
    color: "#8C8C8C",
    width: '100%',
});
export const CardButon = styled(Button)({
    marginBlock: 12,
    borderRadius: 6,
    padding: "0.5rem 1.5rem",
    color: "#fff",
    display: "block",
    fontFamily: "Open Sans,Helvetica,sans-serif",
    fontSize: "1.125rem",
    fontWeight: "100",
    backgroundColor: "#CC9900",
    "&:hover": { backgroundColor: "#906E09", color: "white" },
})