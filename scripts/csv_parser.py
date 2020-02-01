import pandas as pd

df = pd.read_csv("corona_virus.csv")
country_list = []

# filtering the countries
for country in df['Country']:
    if country in country_list:
        continue
    else:
        country_list.append(country)

df = pd.DataFrame(columns=['Country'], data=country_list)

df.to_csv("affected_countries.csv")
print(df)

# formatting the date
df = pd.read_csv("corona_virus.csv")

day_list = []
for day in df['Last Update']:
    day = day.split(" ")
    del day[1]

    day_list.append(day)


df['Date'] = day_list
df['Date'] = df['Date'].str[0]
print(df)
df.to_csv("corona_virus.csv")