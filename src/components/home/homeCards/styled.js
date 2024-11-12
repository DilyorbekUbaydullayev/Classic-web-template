import { styled, Typography } from "@mui/material";

export const Title2 = styled('h5')({
    color: "#cc9900",
    fontSize:28,
    fontWeight:450,
    marginBottom:0,
    marginTop:15,
    letterSpacing: 1.2,
});
export const Title3 = styled('p')({
    fontWeight: 300,
    fontSize: 19.5,
    lineHeight: 2,
    color: "#8C8C8C",
    marginBottom: 15,
});
export const Title4 = styled(Typography)({
    color: "#cc9900",
    fontSize:26,
    marginTop: 16,
    letterSpacing: 1.2,
});
export const Title5 = styled(Title4)({
    marginBottom: 10,
});
export const Img = styled('img')({
    maxWidth: "100%",
    height: "auto",
});
export const Img2 = styled(Img)({
    marginTop: 56,
})