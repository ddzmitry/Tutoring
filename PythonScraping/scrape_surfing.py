import time
from splinter import Browser
from bs4 import BeautifulSoup
from selenium import webdriver


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": r"C:/Users/ddzmi/Desktop/chromedriver.exe"}
    return Browser("chrome", **executable_path, headless=False)

# this funciton will return a dictionary for image that we can use to store in mongo DB
def img_portfolio(img_src,alt):
    return {
        "src": img_src,
        "alt": alt
    }
    
def scrape():
    # we can store image data in array 
    all_images = []
    browser = init_browser()
    images_website = "https://www.pexels.com/"
    browser.visit(images_website)
    time.sleep(2)
    html = browser.html
    img_soup = BeautifulSoup(html, "html.parser")
    container = img_soup.find("div", {"class": "photos"})
    all_Images = container.find_all('img')
    for img in all_Images:
        if(img.attrs.get('srcset')):
                _altInfo = img.attrs.get('alt')
                #will give an array of two src
                sources = img.attrs.get('srcset').split(',')
                # we need a smalest source of it                  
                smal_img_src = sources[0].split(' ')[0]
                # and we get our picture info in pretty dictionary                 
                # print(img_portfolio(smal_img_src,_altInfo))
                # Now we can append our data to array and return it 
                all_images.append(img_portfolio(smal_img_src,_altInfo))
    return all_images  

