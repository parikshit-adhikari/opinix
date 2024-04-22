import pandas as pd

def preprocess_data(filePath):

    df = pd.read_csv(filePath)
    columnName=df.columns
    desiredColumn=[]
    for col in columnName:
        if (col=='reviewText' or col=='reviewTime'):
            desiredColumn.append(col)
    df=df[desiredColumn].copy()
    return df

