FROM continuumio/anaconda3

RUN conda update -n base conda
RUN conda install jupyter -y --quiet

RUN pip install -U pip
RUN pip install mglearn

WORKDIR /workspace

CMD "/opt/conda/bin/jupyter notebook --notebook-dir=/workspace --ip='*' --port=8888 --no-browser --allow-root"
