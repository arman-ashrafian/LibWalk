/* eslint-disable */
import React from "react";
import NavBar from "../navbar";
import Card from "react-bootstrap/Card";
import { club_list, getClubs } from "../cloud";
import "../../css/multiCarousel.css";
import $ from "jquery";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orgs: [],
      currentPage: 1,
      clubPerPage: 9,
      tagDict: {},
      totalPages: Math.ceil(club_list.length / 9)
    };

    this.generateTagList = this.generateTagList.bind(this);

    // GET /getClubs & set the state when the api response is recieved
    /*getClubs().then(json => {
                this.setState({
                  orgs: json.clubs,
                  totalPages: Math.ceil(json.clubs.length / 9)
                });
              });*/

    if (this.state.orgs === undefined) {
      this.state = {
        orgs: []
      };
    }
  }

  render() {
    /* Update the number of clubs to show per page and from what range to what range */
    const { clubPerPage, currentPage, orgs } = this.state;
    const endInd = currentPage * clubPerPage;
    const startInd = endInd - clubPerPage;

    // Choose the subarray of clubs to show in orgs array
    const currentClubs = orgs.slice(startInd, endInd);

    return (
      <div>
        <NavBar {...this.props} />
        <main className="mt-3 pt-3">
          <div className="container-fluid centerPage">
            {/*
                        <div className="row centerPage" >
                        </div>*/}
            {/*<div className="home_grid_container parent" style={{backgroundColor:'black', width:'100%'}}>*/}
            {this.org_grid(currentClubs)}
            {/*</div>*/}
          </div>
        </main>
      </div>
    );
  }

  org_grid = () => {
    let tagMap = this.state.tagDict;
    return (
      <div style={{ backgroundColor: "white", width: "85%" }}>
        {Object.keys(tagMap).map(
          tag => this.org_multi_item_carousel(tag, tagMap[tag])
          //org_multi_item_carousel("Cultural", tagMap["Cultural"])
        )
        //org_multi_item_carousel("Cultural", tagMap["Cultural"])
        }
      </div>
    );
  };

  //Creates a hash map of tags
  generateTagList() {
    let dict = {};
    this.state.orgs.forEach(org => {
      let org_values = Object.values(org)[0];
      org_values.tags.forEach(tag => {
        if (!dict[tag]) {
          dict[tag] = [];
        }
        dict[tag].push(org);
      });
    });

    if (this._isMounted) {
      this.setState({ tagDict: dict });
    }
    //console.log(this.state.tagDict)
  }

  redirectToClubDetails(club_id) {
    this.props.history.push({
      pathname: "/orgs",
      state: {
        club_id: club_id
      }
    });
    window.location.reload();
  }

  org_multi_item_carousel(tag, tagList) {
    return (
      <div /*className = "container"*/ style={{ backgroundColor: "#FFFFFF" }}>
        <h3
          style={{
            fontSize: "3.2vh",
            textAlign: "left",
            marginLeft: "5vh",
            marginBottom: "-2vh",
            fontWeight: "400",
            zIndex: "20000000"
          }}
        >
          {tag}
        </h3>
        <div
          className="MultiCarousel"
          data-items="1,3,3,5"
          data-slide="2"
          id="MultiCarousel"
          data-interval="1000"
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        >
          <div
            className="MultiCarousel-inner"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {tagList.map(clubItem => this.org_grid_component(clubItem))}
          </div>
          <button
            style={{
              borderWidth: "0px",
              width: "5.4vh",
              height: "5.4vh",
              borderRadius: "2.7vh",
              textAlign: "center"
            }}
            className="leftLst"
          >
            &lt;
          </button>
          <button
            style={{
              borderWidth: "0px",
              width: "5.4vh",
              height: "5.4vh",
              borderRadius: "2.7vh",
              textAlign: "center"
            }}
            className="rightLst"
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }

  // each club component card to be used in org_multi_item_carousel
  org_grid_component(org) {
    org = Object.values(org)[0];
    org.img =
      "https://ca-times.brightspotcdn.com/dims4/default/9c3ea25/2147483647/strip/true/crop/1600x854+0+0/resize/840x448!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2Fc6%2Fe58081f27535c976921b49239f35%2Fla-me-0516-ucsd-fundraising-20160516-001";

    if (org.pictureURL !== "") {
      org.img = org.pictureURL;
    }
    return (
      <div className="item">
        <Card style={{ width: "90%", height: "26vh" }} className="text-center">
          {/*<Card.Img variant="top" src={org.img}/>*/}
          <div style={{}}>
            <Card.Img
              src={org.img}
              style={{
                width: "100%",
                height: "18vh",
                "object-fit": "cover"
              }}
            />
          </div>
          <Card.Body style={{ width: "100%", height: "20vh" }}>
            <Card.Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              <small
                style={{
                  color: "#000000",
                  fontSize: "2.2vh",
                  fontWeight: "500"
                }}
              >
                <a
                  onClick={() => {
                    this.redirectToClubDetails(org.clubReference);
                  }}
                >
                  {org.clubName}
                </a>
              </small>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  setUpCarousel() {
    let itemsDiv = ".MultiCarousel-inner";
    let itemWidth = "";
    // noinspection JSJQueryEfficiency
    $(".leftLst, .rightLst").mousedown(function() {
      let condition = $(this).hasClass("leftLst");
      if (condition) click(0, this);
      else click(1, this);
    });

    ResCarouselSize();

    $(window).resize(function() {
      ResCarouselSize();
    });

    //It is used to get some elements from btn
    function click(ell, ee) {
      //function(){
      let Parent =
        "#" +
        $(ee)
          .parent()
          .attr("id");
      let slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);

      //}
    }

    //this function define the size of the items
    function ResCarouselSize() {
      let dataItems = "data-items";
      let itemClass = ".item";
      let id = 0;
      let btnParentSb = "";
      let itemsSplit = "";
      let bodyWidth = $("main").width();
      $(itemsDiv).each(function() {
        id = id + 1;
        let itemNumbers = $(this).find(itemClass).length;
        btnParentSb = $(this)
          .parent()
          .attr(dataItems);
        itemsSplit = btnParentSb.split(",");
        $(this)
          .parent()
          .attr("id", "MultiCarousel" + id);

        let newWidthConst = bodyWidth / 230;
        itemWidth = bodyWidth * (1 / newWidthConst);
        $(this).css({
          transform: "translateX(0px)",
          width: itemWidth * itemNumbers
        });
        $(this)
          .find(itemClass)
          .each(function() {
            $(this).outerWidth(itemWidth);
          });

        $(".leftLst").addClass("over");
        $(".rightLst").removeClass("over");
      });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
      let leftBtn = ".leftLst";
      let rightBtn = ".rightLst";
      let translateXval = "";
      let divStyle = $(el + " " + itemsDiv).css("transform");
      let values = divStyle.match(/-?[\d.]+/g);
      let xds = Math.abs(values[4]);
      if (e === 0) {
        // noinspection JSCheckFunctionSignatures
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        $(el + " " + rightBtn).removeClass("over");
        if (translateXval <= itemWidth / 2) {
          translateXval = 0;
          $(el + " " + leftBtn).addClass("over");
        }
      } else if (e === 1) {
        let itemsCondition =
          $(el)
            .find(itemsDiv)
            .width() - $(el).width();
        translateXval = parseInt(xds) + parseInt(itemWidth * s);

        $(el + " " + leftBtn).removeClass("over");

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition;
          $(el + " " + rightBtn).addClass("over");
        }
      }
      $(el + " " + itemsDiv).css(
        "transform",
        "translateX(" + -translateXval + "px)"
      );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    getClubs().then(clubList => {
      if (clubList === undefined) {
        return;
      }

      this.setState({
        orgs: clubList["clubs"]
      });

      this.generateTagList();
      this.setUpCarousel();
    });
  }
}

//TAKEN FROM ONLINE FOR THE CAROUSEL
export default Home;
