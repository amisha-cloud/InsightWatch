from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Connect to MongoDB
client = MongoClient(os.getenv("MONGODB_URI"))

# Use 'insightwatch' database
db = client["insightwatch"]

# Create collection (like a table)
digest_collection = db["digest_reports"]
