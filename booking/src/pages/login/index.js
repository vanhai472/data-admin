import React from "react";
import { Button, Carousel } from "antd";
import { withRouter } from "react-router-dom";
import "./index.scss";

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};
class Login extends React.Component {
  render() {
    return (
      <>
        <Carousel className="wraper-carousel" autoplay >
          <div className="owl-login1">
            <div className="text-carousel">
              <p className="text-item">
                "Cuốn sách tốt nhất cho bạn là cuốn sách nói nhiều nhất với bạn
                vào lúc bạn đọc nói. Tôi không nói tới cuốn sách cho bạn nhiều
                bài học nhất mà là cuốn sách nuôi dưỡng tâm hồn bạn. Và điều đó
                phụ thuộc vào tuổi tác, trải nghiệm, nhu cầu về tâm lý và tinh
                thần.”
              </p>
              <h2 className="author">
                - Robertson Davies
              </h2>
            </div>
          </div>
          <div className="owl-login2">
            <div className="text-carousel">
              <p className="text-item">
                "Cuốn sách tốt nhất cho bạn là cuốn sách nói nhiều nhất với bạn
                vào lúc bạn đọc nói. Tôi không nói tới cuốn sách cho bạn nhiều
                bài học nhất mà là cuốn sách nuôi dưỡng tâm hồn bạn. Và điều đó
                phụ thuộc vào tuổi tác, trải nghiệm, nhu cầu về tâm lý và tinh
                thần.”
              </p>
              <h2 className="author">
                - Robertson Davies
              </h2>
            </div>
          </div>
          <div className="owl-login3">
            <div className="text-carousel">
              <p className="text-item">
                "Cuốn sách tốt nhất cho bạn là cuốn sách nói nhiều nhất với bạn
                vào lúc bạn đọc nói. Tôi không nói tới cuốn sách cho bạn nhiều
                bài học nhất mà là cuốn sách nuôi dưỡng tâm hồn bạn. Và điều đó
                phụ thuộc vào tuổi tác, trải nghiệm, nhu cầu về tâm lý và tinh
                thần.”
              </p>
              <h2 className="author">
                - Robertson Davies
              </h2>
            </div>
          </div>
        </Carousel>
        <div className="wraper-login">
          <div className="wrraper-content">
           
            {/* <h1 className="title-login">Thư Viện Ebook Miễn Phí</h1>
            <p className="conten-login">
              Thư viện Sachvui.Com là dự án phi lợi nhuận,nhằm mục đích chia sẻ
              sách và đọc truyện online miễn phí vì cộng đồng.
            </p> */}
            
            <Button size={20}
              type="dashed"
              onClick={() => this.props.history.push("/home")}
            >
              Read Book
            </Button>
          </div>
         </div> 
      </>
    );
  }
}

export default withRouter(Login);
