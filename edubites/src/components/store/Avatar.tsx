import React from "react";
import styles from "../../styles/Dashboard.module.css";
import { Typography } from "@material-ui/core";
import owl from "../../assets/owl.png";

const cosmeticsData = [
  {
    name: "Panda",
    topic: "Makeover",
    thumbnail:
      "https://i1.wp.com/2.bp.blogspot.com/-ewsXSsnIQ7g/VimjhfAm-nI/AAAAAAAAHkU/xPGDwmMpN3E/s1600/panda_chibi_by_yansenwijaya-d7jyiua.png",
    href: "#",
  },
  {
    name: "Unicorn",
    topic: "Makeover",
    thumbnail:
      "https://cdn.vox-cdn.com/thumbor/QW71IYo3SKAEA_lXKvNxeGtqHdU=/0x0:640x480/1400x1050/filters:focal(269x189:371x291):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/49524447/sparkle-unicorn-bigger.0.gif",
    href: "#",
  },
  {
    name: "Robot",
    topic: "Makeover",
    thumbnail: "https://static.thenounproject.com/png/2195399-200.png",
    href: "#",
  },
  {
    name: "Owl",
    topic: "Makeover",
    thumbnail: owl,
    href: "#",
  },
  {
    name: "Crown",
    topic: "Headwear",
    thumbnail:
      "https://i.pinimg.com/originals/b9/1b/84/b91b84189df193c557445b277fe82295.png",
    href: "#",
  },
  {
    name: "Mask",
    topic: "Headwear",
    thumbnail: "https://static.thenounproject.com/png/3283835-200.png",
    href: "#",
  },
  {
    name: "Sunglasses",
    topic: "Headwear",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0898/5824/products/HighKey_Black-Fade_1025x.jpg?v=1602612822",
    href: "#",
  },
  {
    name: "Helicopter Hat",
    topic: "Headwear",
    thumbnail:
      "https://assets.kogan.com/images/yellow-octopus/YLO-GR-HBC/1-279748f701-mdi-helicap-multi-colour-helicopter-cap-yellow-octopus-30773125066.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
    href: "#",
  },
];

export default function Cosmetics() {
  return (
    <div>
      <Typography variant="h3" component="h3">
        Customise your Avatar
      </Typography>
      <div className={styles.cardSection}>
        <div className={styles.cardBox}>
          {cosmeticsData.map((game, key) => (
            <a
              href={game.href}
              className={styles.cardLink}
              style={{ margin: 10 }}
            >
              <div key={key} className={styles.card}>
                <img src={game.thumbnail} />
                <div className={styles.descriptionSectionFlex}>
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ fontWeight: "bold" }}
                  >
                    {game.topic}
                  </Typography>
                  <Typography variant="h3" align="center">
                    {game.name}
                  </Typography>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
