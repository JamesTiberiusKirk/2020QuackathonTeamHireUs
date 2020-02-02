import pandas as pd

df = pd.read_csv('../data/corona_virus_data.csv')

df = df.groupby(['Country', 'Date']).apply(lambda x: x.sort_values('Date'))
df.to_csv('corona_virus_condensed.csv')