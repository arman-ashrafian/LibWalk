import React from "react";
import NavBar from "../navbar";
//import Carousel from "react-bootstrap/Carousel";
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import {club_list, getTag} from "../cloud";
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

      this.setClubPerPage = this.setClubPerPage.bind(this);
      this.setPageNext = this.setPageNext.bind(this);
      this.setPagePrev = this.setPagePrev.bind(this);
      this.moveFirstPage = this.moveFirstPage.bind(this);
      this.moveLastPage = this.moveLastPage.bind(this);
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

        /*getTag("CS").then(tagInfo => {
            console.log(tagInfo)
        })*/
        /* Update the number of clubs to show per page and from what range to what range */
        const {clubPerPage, currentPage, orgs, totalPages} = this.state;
        const endInd = currentPage * clubPerPage;
        const startInd = endInd - clubPerPage;

        // Choose the subarray of clubs to show in orgs array
        const currentClubs = orgs.slice(startInd, endInd);

        // Call pagination function to get all the pages for pagination
        const pageNumber = this.pagination(currentPage, totalPages);

        // Load pagination
        const loadPageNumber = pageNumber.map(page => {
            return (
                <div>
                    <Pagination.Item
                        key={page}
                        id={page}
                        active={page === currentPage}
                        onClick={page === "..." ? this.doNothing : this.setClubPerPage}
                    >
                        {(page = page === "..." ? <Pagination.Ellipsis/> : page)}
                    </Pagination.Item>
                </div>
            );
        });

        return (
            <div>
                <NavBar {...this.props} />
                <main className="mt-5 pt-5">
                    <div className="container centerPage">
                        <div className="row centerPage">
                            {/*Rest of the page here*/}
                            <div className="home_grid_container">
                                {this.org_grid(currentClubs)}
                            </div>
                        </div>
                    </div>
                </main>
                <Pagination className="pagination" size="lg">
                    <Pagination.First onClick={this.moveFirstPage}/>
                    <Pagination.Prev onClick={this.setPagePrev}/>
                    {loadPageNumber}
                    <Pagination.Next onClick={this.setPageNext}/>
                    <Pagination.Last onClick={this.moveLastPage}/>
                </Pagination>
            </div>
        );
    }

    //OG KAUS' CODE
   /* org_grid = orgs => {
        let grid_items = [];
        let numcols = 4;
        let numrows = orgs.length / numcols;
        numrows = Math.ceil(numrows);
        
        orgs.forEach(function (e) {
            grid_items.push(org_grid_component(e));
        });
        
        let grid = [];

        for (let i = 0; i <= numrows; i++) {
            let row = [];
            for (let j = 0; j < numcols; j++) {
                row.push(
                    <div className="home_grid_component">
                        <Col>{grid_items[i * numcols + j]}</Col>
                        <div>
                            <br/>
                        </div>
                    </div>
                );
            }
            grid.push(row);
        }

        return (
            <div>
                <CardDeck> {grid} </CardDeck>
            </div>
        );
    };
*/
    org_grid = orgs => {
        let tagMap = this.state.tagDict;
        return (
            <div>
                { Object.keys(tagMap).map( tag => 
                   org_multi_item_carousel(tag, tagMap[tag])
                  )
                }
            </div>
        );
    }

    setClubPerPage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    /* Function to move to the next page */
    setPageNext(event) {
        //currentPage += 1;
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    /* Function to move to the previous page */
    setPagePrev(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    /* Function to move to the first page */
    moveFirstPage(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    }

    /* Function to move to the last page */
    moveLastPage(event) {
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
  generateTagList(){
    this.state.orgs.forEach( (org) => {
      let org_values = Object.values(org)[0];
      org_values.tags.forEach((tag)=>{
        let dict = this.state.tagDict;
        if(!dict[tag]){
          dict[tag] = [];
        }
        dict[tag].push(org);
        this.setState({tagDict: dict})
      })
    })
    //console.log(this.state.tagDict)
  }
}

//TAKEN FROM ONLINE FOR THE CAROUSEL
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
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
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});
function org_multi_item_carousel(tag, tagList) {
      let itemsInCarousel = [];
      return (
            <div class="row">
            <h3>{tag}</h3>
              <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                      {tagList.map( clubItem => 
                        org_grid_component(clubItem)
                        )
                      }
                    <button class="btn btn-primary leftLst"> &larr; </button>
                    <button class="btn btn-primary rightLst"> &rarr; </button>
              </div>
            </div>
        );
    };

let org_grid_component = org => {
    org = Object.values(org)[0];
    console.log(JSON.stringify(org));
    org.img = "https://picsum.photos/150/50";
    return (
        <div class="MultiCarousel-inner">
          <div class="item">
              <Card style={{width: "20rem", height: "36rem"}} className="text-center">
                      {/*<Card.Img variant="top" src={org.img}/>*/}
                      <Card.Img
                          src={org.img}
                          style={{
                              width: '100%',
                              height: '15vw',
                              'object-fit': 'cover'
                          }}/>
                      <Card.Body>
                          <Card.Title>{org.clubName}</Card.Title>
                          {/* <Card.Text>
                          <small className="scroll-box">
                            {org.description.slice(0, 450)}
                          </small>
                        </Card.Text> */}
                          <Button variant="primary" href={org.pageURL}>
                              Org Home
                          </Button>
                      </Card.Body>
              </Card>
          </div>
        </div>
    );
};

export default Home;

