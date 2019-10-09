import numpy as np
​
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
​
from flask import Flask, jsonify
​
​
#################################################
# Database Setup
#################################################
rds_connection_string = "postgres:postgres@localhost:5432/Project 2"
engine = create_engine(f'postgresql://{rds_connection_string}')
​
# reflect an existing database into a new model
​
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
​
# Save reference to the table
Stores = Base.classes.stores
​
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
​
​
#################################################
# Flask Routes
#################################################
​
@app.route("/home")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/graphs<br/>"
        f"/api/v1.0/maps"
    )
​
​
@app.route("/api/v1.0/graphs")
def graphs():
    session = Session(engine)
​

    results = Stores.id_tienda.query.all() 
    
    session.close()
    ​
    return results
​
​
@app.route("/api/v1.0/maps")
def maps():
    session = Session(engine)
​

    results = session.query(Stores.name, Stores.lat, Stores.long).all()
​
    session.close()
    return jsonify(username=Stores.name,
                   lat=Stores.lat,
                   long=Stores.longd)
​
​
​
if __name__ == '__main__':
    app.run(debug=True)