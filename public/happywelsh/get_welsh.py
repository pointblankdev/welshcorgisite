import os
import requests

base_url = 'https://bafybeifydpxwy3iyothiadqm4c7sc7yybfmvhbd6n3ouz4e7u4yk4vmcfa.ipfs.dweb.link/'
output_folder = '.'

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for i in range(1, 2001):
    img_path = f'{output_folder}/{i}.png'

    if os.path.exists(img_path):
        print(f'Image {i} already exists. Skipping.')
        continue

    img_url = f'{base_url}{i}.png'
    response = requests.get(img_url)

    if response.status_code == 200:
        with open(img_path, 'wb') as img_file:
            img_file.write(response.content)
        print(f'Image {i} downloaded.')
    else:
        print(f'Error downloading image {i}: {response.status_code}')
