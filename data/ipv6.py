import pandas as pd

data = pd.read_csv('GeoLite2-City-Blocks-IPv6.csv')

ips = data[['network', 'latitude', 'longitude']].copy()

ips = ips.groupby(['latitude', 'longitude']).size()

ips.to_csv('out.csv')
