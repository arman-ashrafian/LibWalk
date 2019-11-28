import React from "react";
import NavBar from "../navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {club_list} from "../cloud";
import Pagination from "react-bootstrap/Pagination";
import '../../css/multiCarousel.css';
import $ from 'jquery';

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

        this.set_club_per_page = this.set_club_per_page.bind(this);
        this.set_page_next = this.set_page_next.bind(this);
        this.set_page_prev = this.set_page_prev.bind(this);
        this.move_first_page = this.move_first_page.bind(this);
        this.move_last_page = this.move_last_page.bind(this);
        this.generate_tag_list = this.generate_tag_list.bind(this);

        this.generate_tag_list();

        if (this.state.orgs === undefined) {
            this.state = {
                orgs: []
            };
        }
    }

    render() {
        /* Update the number of clubs to show per page and from what range to what range */
        const {club_per_page, current_page, orgs, total_pages} = this.state;
        const end_ind = current_page * club_per_page;
        const start_ind = end_ind - club_per_page;

        // _choose the subarray of clubs to show in orgs array
        const current_clubs = orgs.slice(start_ind, end_ind);

        // _call pagination function to get all the pages for pagination
        const page_number = this.pagination(current_page, total_pages);

        // Load pagination
        const load_page_number = page_number.map(page => {
            return (
                <div>
                    <Pagination.Item
                        key={page}
                        id={page}
                        active={page === current_page}
                        onClick={page === "..." ? this.doNothing : this.set_club_per_page}
                    >
                        {(page = page === "..." ? <Pagination.Ellipsis/> : page)}
                    </Pagination.Item>
                </div>
            );
        });

        return (
            <div>
                <NavBar {...this.props} />
                <main className="mt-3 pt-3">
                    <div class="container-fluid centerPage">
                        {/*
                        <div className="row centerPage" >
                        </div>*/}
                        <div className="home_grid_container parent">
                            {this.org_grid(current_clubs)}
                        </div>
                    </div>

                </main>
                <Pagination className="pagination" size="lg">
                    <Pagination.First onClick={this.move_first_page}/>
                    <Pagination.Prev onClick={this.set_page_prev}/>
                    {load_page_number}
                    <Pagination.Next onClick={this.set_page_next}/>
                    <Pagination.Last onClick={this.move_last_page}/>
                </Pagination>
            </div>
        );
    }

    org_grid = orgs => {
        let tagMap = this.state.tagDict;
        return (
            <div>
                {Object.keys(tagMap).map(tag =>
                        this.org_multi_item_carousel(tag, tagMap[tag])
                    //org_multi_item_carousel("Cultural", tagMap["Cultural"])
                )
                    //org_multi_item_carousel("Cultural", tagMap["Cultural"])
                }
            </div>
        );
    }

    set_club_per_page(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    /* Function to move to the next page */
    set_page_next(event) {
        //currentPage += 1;
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    /* Function to move to the previous page */
    set_page_prev(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    /* Function to move to the first page */
    move_first_page(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    }

    /* Function to move to the last page */
    move_last_page(event) {
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({
                currentPage: this.state.totalPages
            });
        }
    }

    /* Function to produce the correct pagination */
    pagination(currentPage, totalPages) {
        const offset = 2;
        const left = currentPage - offset,
            right = currentPage + offset + 1;
        let dummyValue = 0;
        const dummyArray = [];
        const pageNumber = [];

    // Generate the dummyArray
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        dummyArray.push(i);
      }
    }

    // Generate the pageNumber array
    for (let i of dummyArray) {
      if (dummyValue) {
        if (i - dummyValue === offset) {
          pageNumber.push(dummyValue + 1);
        } else if (i - dummyValue !== 1) {
          pageNumber.push("...");
        }
      }
      pageNumber.push(i);
      dummyValue = i;
    }
    return pageNumber;
  }

    //Creates a hash map of tags
    generate_tag_list() {
        this.state.orgs.forEach((org) => {
            let org_values = Object.values(org)[0];
            org_values.tags.forEach((tag) => {
                let dict = this.state.tagDict;
                if (!dict[tag]) {
                    dict[tag] = [];
                }
                dict[tag].push(org);
                this.setState({tagDict: dict})
            })
        })
        //console.log(this.state.tagDict)
    }

    redirect_to_club_details(club_id) {
        this.props.history.push({
            pathname: "/orgs",
            state: {
                club_id: club_id,
            }
        })
    };

    org_grid_component(org) {
        org = Object.values(org)[0];
        // console.log(JSON.stringify(org));
        org.img = "https://picsum.photos/150/50";
        return (

            <div class="item">
                <Card style={{width: "16rem", height: "20rem"}} className="text-center">
                    {/*<Card.Img variant="top" src={org.img}/>*/}
                    <Card.Img
                        src={org.img}
                        style={{
                            width: '100%',
                            height: '15vw',
                            'object-fit': 'cover'
                        }}/>
                    <Card.Body>
                        <Card.Title> <a onClick={() => {
                            this.redirect_to_club_details(org.clubReference)
                        }}>{org.clubName}</a></Card.Title>
                        {/* <Card.Text>
                          <small className="scroll-box">
                            {org.description.slice(0, 450)}
                          </small>
                        </Card.Text> */}
                        <Button href={org.pageURL}>
                            Org Home
                        </Button>
                    </Card.Body>
                </Card>

            </div>
        );
    };

    org_multi_item_carousel(tag, tagList) {
        let itemsInCarousel = [];
        return (
            <div class="container">
                <h3>{tag}</h3>
                <div class="MultiCarousel" data-items="1,3,4,4" data-slide="1" id="MultiCarousel" data-interval="1000">
                    <div class="MultiCarousel-inner">
                        {tagList.map(clubItem =>
                            this.org_grid_component(clubItem)
                        )}
                    </div>
                    <button class="leftLst btn-circle btn-md">&lt;</button>
                    <button class="rightLst btn-circle btn-md">&gt;</button>
                </div>
            </div>
        );
    };
}

//brent yee

//TAKEN FROM ONLINE FOR THE CAROUSEL

$(document).ready(function () {
    //setTimeout(function() {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";
    var down = false;
    /*  $(document).mousedown(function() {
          down = true;
      }).mouseup(function() {
          down = false;
      });
      $('.leftLst, .rightLst').mouseout(function() {
          if(down) {
          var condition = $(this).hasClass("leftLst");
              if (condition)
                  click(0, this);
              else
                  click(1, this);
                  console.log("down");
          }
          else {
              console.log("up");
          }
      });*/
    $('.leftLst, .rightLst').mousedown(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this);
    });
$(document).ready(function() {
  //setTimeout(function() {
  var itemsMainDiv = ".MultiCarousel";
  var itemsDiv = ".MultiCarousel-inner";
  var itemWidth = "";
  var down = false;
  /*  $(document).mousedown(function() {
        down = true;
    }).mouseup(function() {
        down = false;
    });
    $('.leftLst, .rightLst').mouseout(function() {
        if(down) {
        var condition = $(this).hasClass("leftLst");
            if (condition)
                click(0, this);
            else
                click(1, this);
                console.log("down");
        }
        else {
            console.log("up");
        }
    });*/
  $(".leftLst, .rightLst").mousedown(function() {
    var condition = $(this).hasClass("leftLst");
    if (condition) click(0, this);
    else click(1, this);
  });

    res_carousel_size();

    $(window).resize(function () {
        res_carousel_size();
        // }, 5000);
    });

    //this function define the size of the items
    // YO BODY WIDTH IS 820.8
    function res_carousel_size() {
        //console.log( $(itemsMainDiv).width());
        let incno = 0;
        let data_items = ("data-items");
        let item_class = ('.item');
        let id = 0;
        let button_parent_sub = '';
        let itemsSplit = '';
        let samp_width = $(itemsMainDiv).width();
        let body_width = $('main').width();

        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(item_class).length;
            button_parent_sub = $(this).parent().attr(data_items);
            itemsSplit = button_parent_sub.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (body_width >= 1200) {
                incno = itemsSplit[3];
                itemWidth = samp_width / incno;
            } else if (body_width >= 992) {
                incno = itemsSplit[3];
                itemWidth = samp_width / incno;
            } else if (body_width >= 768) {
                incno = itemsSplit[3];
                itemWidth = samp_width / incno;
            } else {
                incno = itemsSplit[3];
                itemWidth = samp_width / incno;
            }
            $(this).css({'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers});
            $(this).find(item_class).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");
            // alert("Finished or whateva");
        });
    }


    //this function used to move the items
    function res_carousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");
            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        } else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

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
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        res_carousel(ell, Parent, slide);
    }
});

export default Home;

