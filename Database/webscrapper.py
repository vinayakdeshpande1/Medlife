from bs4 import BeautifulSoup
import requests
import re
import mysql.connector


Database = mysql.connector.connect(
  host="sql678.main-hosting.eu",
  user="u812410177_medcliffeDb",
  password="^s8fuG*=N*Y",
  database="u812410177_medcliffeDb"
)

url="https://www.netmeds.com/non-prescriptions/devices/page/3"
response=requests.get(url)
print(response)

html=response.content
soup=BeautifulSoup(html,'html.parser')
product_cate="devices"

for i in soup.find_all('div',attrs={'class':'cat-item'}):


    product_name=i.find('span',attrs={'class':'clsgetname'})
    product_price=str(i.find('span',attrs={'id':'final_price'}))
    product_price= re.findall("\d+\.\d+", product_price)
    product_mrp=str(i.find('strike',attrs={'id':'price'}))
    product_mrp= re.findall("\d+\.\d+",product_mrp)
    product_discount=str(i.find('span',attrs={'class':'save-badge'}))
    product_discount= ''.join(x for x in product_discount if x.isdigit())
    product_descrip=i.find('div',attrs={'class':'cate_filter'})
    product_image=i.find('img')

    if str(" ".join(product_price))!="":
        print("\nProduct: "+product_name.text)
        print("Product price: "," ".join(product_price))
        print("Product MRP: "," ".join(product_mrp))
        print("Product Discount: " ,str(product_discount))
        print("Product Description: "+product_descrip.text)
        print("product category: ",product_cate),"NULL"
        print("Product Image",product_image['src'])
    
        cursor = Database.cursor()
        sql = 'INSERT INTO medlife_products_data_base (Product_ID,Product_Name,Product_Price,Product_MRP,Product_Discount,Product_card_details,Product_details,Product_categories,Product_Image) VALUES ("{}","{}","{}","{}","{}","{}","{}","{}","{}")' .format("NULL",product_name.text," ".join(product_price)," ".join(product_mrp),product_discount,product_descrip.text,product_descrip.text
        ,product_cate,product_image['src'])
        print(" ".join(product_mrp))
        cursor.execute(sql)
        Database.commit()
