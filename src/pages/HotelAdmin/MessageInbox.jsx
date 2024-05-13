import { Image, Paperclip, Search, Send } from "react-bootstrap-icons";
import "./MessageInbox.scss";
import Avatar from "../../components/Avatar/Avatar";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MessageInbox = () => {
  const styleAvatar = { width: "40px", height: "40px" };
  const styleAvatarMsg = {width:"35px", height:"35px"};
  const messageContainerRef = useRef(null);

  const divRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const ta = textareaRef.current;
    const div = divRef.current;

    const autosize = () => {
      setTimeout(() => {
        ta.style.cssText = "height:0px"; // Necessary to shrink scrollHeight when deleting text
        const height = Math.min(20 * 5, ta.scrollHeight);
        div.style.cssText = `height:${height}px`;
        ta.style.cssText = `height:${height}px`;
      }, 0);
    };

    ta.addEventListener("keydown", autosize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      ta.removeEventListener("keydown", autosize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  useEffect(() => {
    // Ajoutez une fonction pour ajuster le défilement
    const adjustScroll = () => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    };

    // Appeler adjustScroll après chaque mise à jour des messages
    adjustScroll();

    // Pour s'assurer que le défilement est ajusté même après des mises à jour futures
    return () => {
      adjustScroll();
    };
  }, []);
  return (
    <div id="MessageInbox">
      <div className="left elevated-card">
        <h3 className="mb-15">Messages</h3>
        <div className="search">
          <input type="text" />
          <div className="iconSearch">
            <Search size={15} />
          </div>
        </div>
        <div className="list-discussion mt-15">
          <div className="discussion">
            <div className="avatar">
              <Avatar style={styleAvatar} />
            </div>
            <div className="descri">
              <div className="head">
                <span className="name">Jon Doe</span>
                <small>11:04</small>
              </div>
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ex consectetur dignissimos tempore iure libero dolore
                  reprehenderit atque enim odio nisi sapiente, magnam nobis vel
                  accusantium harum quae nihil reiciendis?
                </p>
              </div>
            </div>
          </div>
          <div className="discussion">
            <div className="avatar">
              <Avatar style={styleAvatar} />
            </div>
            <div className="descri">
              <div className="head">
                <span className="name">Jon Doe</span>
                <small>11:04</small>
              </div>
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ex consectetur dignissimos tempore iure libero dolore
                  reprehenderit atque enim odio nisi sapiente, magnam nobis vel
                  accusantium harum quae nihil reiciendis?
                </p>
              </div>
            </div>
          </div>
          <div className="discussion read">
            <div className="avatar">
              <Avatar style={styleAvatar} />
            </div>
            <div className="descri">
              <div className="head">
                <span className="name">Jon Doe</span>
                <small>11:04</small>
              </div>
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ex consectetur dignissimos tempore iure libero dolore
                  reprehenderit atque enim odio nisi sapiente, magnam nobis vel
                  accusantium harum quae nihil reiciendis?
                </p>
              </div>
            </div>
          </div>
          <div className="discussion read">
            <div className="avatar">
              <Avatar style={styleAvatar} />
            </div>
            <div className="descri">
              <div className="head">
                <span className="name">Jon Doe</span>
                <small>11:04</small>
              </div>
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ex consectetur dignissimos tempore iure libero dolore
                  reprehenderit atque enim odio nisi sapiente, magnam nobis vel
                  accusantium harum quae nihil reiciendis?
                </p>
              </div>
            </div>
          </div>
          <div className="discussion read">
            <div className="avatar">
              <Avatar style={styleAvatar} />
            </div>
            <div className="descri">
              <div className="head">
                <span className="name">Jon Doe</span>
                <small>11:04</small>
              </div>
              <div className="msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ex consectetur dignissimos tempore iure libero dolore
                  reprehenderit atque enim odio nisi sapiente, magnam nobis vel
                  accusantium harum quae nihil reiciendis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center elevated-card">
        <div className="head">
          <div className="flex align-items-center gap-5">
            <div className="avatar">
              <Avatar style={styleAvatar} />
            </div>
            <div className="descri">
              <span className="name">Jon Doe</span>
              <small>Actif</small>
            </div>
          </div>
        </div>
        <div className="message " ref={messageContainerRef}>
          <div className="incoming flex gap-15">
            <div className="avatar">
              <Avatar style={styleAvatarMsg} />
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem officiis, quisquam, iusto accusamus nisi itaque quam,
                obcaecati facilis dicta qui corrupti atque similique. Et, iusto
                dolorum rerum temporibus soluta inventore.
              </p>
            </div>
            <div className="hours">
              <small>15:03</small>
            </div>
          </div>
          <div className="outgoing flex gap-15">
            <div className="text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem officiis, quisquam, iusto accusamus nisi itaque quam,
                obcaecati facilis dicta qui corrupti atque similique. Et, iusto
                dolorum rerum temporibus soluta inventore.
              </p>
            </div>
            <div className="hours">
              <small>15:03</small>
            </div>
          </div>
          <div className="outgoing flex gap-15">
            <div className="text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem officiis, quisquam, iusto accusamus nisi itaque quam,
                obcaecati facilis dicta qui corrupti atque similique. Et, iusto
                dolorum rerum temporibus soluta inventore.
              </p>
            </div>
            <div className="hours">
              <small>15:03</small>
            </div>
          </div>
        </div>
        <div className="bottom" ref={divRef}>
          <textarea
            name="message"
            id="message"
            placeholder="Ecrire votre message ..."
            ref={textareaRef}
          ></textarea>
          <div className="action flex ">
            <div className="picture">
              <Image size={20} />
            </div>
            <div className="file">
              <Paperclip size={20} />
            </div>
            <div className="send">
              <span>Envoie</span>
              <div className="icon">
                <Send size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right elevated-card">
        <div>
          <div className="flex">
            <div>
              <p>Nom du client :</p>
              <div className="name flex align-items-center gap-5">
                <img src="/img/flags/Flag_of_Madagascar.svg" alt="" />
                <span>Jon Doe</span>
              </div>
            </div>
            <div>
              <p>
                Numéro de <br /> réservation :
              </p>
              <span>1435565653</span>
            </div>
          </div>

          <div className="flex">
            <div>
              <p>Date d'arrivée :</p>
              <span>mar. 19 mars 2024</span>
            </div>
            <div>
              <p>Date de départ</p>
              <span>mer. 20 mars 2024</span>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>Montant total :</p>
              <span>$ 152,82</span>
            </div>
            <div>
              <p>Langue</p>
              <span>francais</span>
            </div>
          </div>
          <div>
            <p>Nombre de personnes :</p>
            <span>2</span>
          </div>
          <div>
            <p>Chambre :</p>
            <span>Chambre Double</span>
          </div>
          <div>
            <p>Heure d'arrivée approximative :</p>
            <span>Entre 04:00 et 05:00</span>
          </div>
        </div>
        <div className="flex justify-content-center mt-20">
          <Link to="/hotels/:hotelId/hotel-admin/reservation/:reservationId">
            Voir les détails de la reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageInbox;
