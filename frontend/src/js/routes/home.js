import React from "react";
import NavBar from "../navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {club_list} from "../cloud";
import "../../css/multiCarousel.css";
import $ from "jquery";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orgs: club_list,
            currentPage: 1,
            clubPerPage: 9,
            tagDict: {},
            totalPages: Math.ceil(club_list.length / 9)
        };

        this.generateTagList = this.generateTagList.bind(this);

        this.generateTagList();

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
        const {clubPerPage, currentPage, orgs} = this.state;
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
                        <div className="home_grid_container parent">
                            {this.org_grid(currentClubs)}
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    org_grid = orgs => {
        let tagMap = this.state.tagDict;
        return (
            <div>
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
        this.state.orgs.forEach(org => {
            let org_values = Object.values(org)[0];
            org_values.tags.forEach(tag => {
                let dict = this.state.tagDict;
                if (!dict[tag]) {
                    dict[tag] = [];
                }
                dict[tag].push(org);
                if (this._isMounted) {
                    this.setState({tagDict: dict});

                }
            });
        });
        //console.log(this.state.tagDict)
    }

    redirectToClubDetails(club_id) {
        this.props.history.push({
            pathname: "/orgs",
            state: {
                club_id: club_id
            }
        });
    }

    org_grid_component(org) {
        org = Object.values(org)[0];
        org.img = "https://picsum.photos/150/50";
        return (
            <div className="item" key={org.clubName}
            >
                <Card
                    style={{width: "16rem", height: "20rem"}}
                    className="text-center"
                >
                    <Card.Img
                        src={org.img}
                        style={{
                            width: "100%",
                            height: "15vw",
                            "objectFit": "cover"
                        }}
                    />
                    <Card.Body>
                        <Card.Title>
                            {" "}
                            <Card.Link href={'#'} onClick={() => {
                                this.redirectToClubDetails(org.clubReference);
                            }}
                            >
                                {org.clubName}
                            </Card.Link>
                        </Card.Title>

                        <Button href={org.pageURL}>Org Home</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    org_multi_item_carousel(tag, tagList) {
        return (
            <div className="container" key={tag}>
                <h3>{tag}</h3>
                <div
                    className="MultiCarousel"
                    data-items="1,3,4,4"
                    data-slide="1"
                    id="MultiCarousel"
                    data-interval="1000"
                >
                    <div className="MultiCarousel-inner">
                        {tagList.map(clubItem => this.org_grid_component(clubItem))}
                    </div>
                    <button className="leftLst btn-circle btn-md">&lt;</button>
                    <button className="rightLst btn-circle btn-md">&gt;</button>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
    }
}

//brent yee

//TAKEN FROM ONLINE FOR THE CAROUSEL

$(document).ready(function () {
    //setTimeout(function() {
    var itemsMainDiv = ".MultiCarousel";
    var itemsDiv = ".MultiCarousel-inner";
    var itemWidth = "";

    $(".leftLst, .rightLst").mousedown(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition) click(0, this);
        else click(1, this);
    });

    ResCarouselSize();

    $(window).resize(function () {
        ResCarouselSize();
        // }, 5000);
    });

    //this function define the size of the items
    // YO BODY WIDTH IS 820.8
    function ResCarouselSize() {
        //console.log( $(itemsMainDiv).width());
        var incno = 0;
        var dataItems = "data-items";
        var itemClass = ".item";
        var id = 0;
        var btnParentSb = "";
        var itemsSplit = "";
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $("main").width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this)
                .parent()
                .attr(dataItems);
            itemsSplit = btnParentSb.split(",");
            $(this)
                .parent()
                .attr("id", "MultiCarousel" + id);

            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 992) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            } else if (bodyWidth >= 768) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            } else {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            $(this).css({
                transform: "translateX(0px)",
                width: itemWidth * itemNumbers
            });
            $(this)
                .find(itemClass)
                .each(function () {
                    $(this).outerWidth(itemWidth);
                });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");
            // alert("Finished or whateva");
        });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ".leftLst";
        var rightBtn = ".rightLst";
        var translateXval = "";
        var divStyle = $(el + " " + itemsDiv).css("transform");
        var values = divStyle.match(/-?[\d.]+/g);
        var xds = Math.abs(values[4]);
        if (e === 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + " " + rightBtn).removeClass("over");
            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + " " + leftBtn).addClass("over");
            }
        } else if (e === 1) {
            var itemsCondition =
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

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent =
            "#" +
            $(ee)
                .parent()
                .attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }
});

export default Home;
