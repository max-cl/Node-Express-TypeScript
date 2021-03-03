import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: theme.spacing(1, 0),
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "254px",
            gridTemplateAreas: `'card1 card2 card2' 'card3 card3 card5' 'card4 card4 card5'`,
            gridGap: theme.spacing(1),
            "&>:nth-child(1)": {
                gridArea: "card1",
            },
            "&>:nth-child(2)": {
                gridArea: "card2",
            },
            "&>:nth-child(3)": {
                gridArea: "card3",
            },
            "&>:nth-child(4)": {
                gridArea: "card4",
            },
            "&>:nth-child(5)": {
                gridArea: "card5",
            },
        },
        card: {
            padding: theme.spacing(2),
        },

        /* ============================================== */
        /* HDTV                                 1920x1080 */
        /* ============================================== */
        "@media screen and (min-width: 1680px) and (max-width: 1920px)": {
            container: {
                gridTemplateRows: "410px 410px",
            },
        },

        "@media screen and (min-width: 900px) and (max-width: 1000px)": {
            container: {
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "280px 280px 280px",
                gridTemplateAreas: `'card1 card2''card3 card4' 'card5';`,
            },
        },

        "@media screen and (min-width: 400px) and (max-width: 899px)": {
            container: {
                gridTemplateColumns: "1fr",
                gridTemplateRows: "240px 240px 240px 240px 240px",
                gridTemplateAreas: `'card1''card2''card3''card4''card5';`,
            },
        },
    }),
);
