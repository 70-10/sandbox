FROM continuumio/anaconda3

RUN conda update -n base conda
RUN conda install jupyter -y --quiet
RUN conda install -c https://conda.anaconda.org/menpo opencv3 -y --quiet

RUN pip install opencv-python

WORKDIR /workspace


CMD "/opt/conda/bin/jupyter notebook --notebook-dir=/workspace --ip='*' --port=8888 --no-browser --allow-root"
# FROM jjanzic/docker-python3-opencv

# RUN pip install --upgrade pip
# RUN pip install jupyter

# CMD ["jupyter", "notebook"]
